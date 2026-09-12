/**
 * Strapi CMS Adapter
 *
 * Implements the CMSProvider interface for Strapi v5.
 * All Strapi-specific logic (response shapes, field mapping, media URLs)
 * is contained within this file. Swap this file to swap CMS.
 */

import { CMSProvider, ResearchPaper, BlogPost, CadModel } from "../types";

// ── Strapi-specific response types ──────────────────────────

interface StrapiMediaFile {
  url: string;
  name: string;
  mime: string;
}

interface StrapiResearchPaper {
  id: number;
  documentId: string;
  title: string;
  paper_id: string | null;
  field: string | null;
  paper_status: string | null;
  year: number | null;
  authors: string | null;
  summary: string | null;
  paper_link: string | null;
  paper_pdf: StrapiMediaFile | null;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface StrapiBlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string | null;
  excerpt: string | null;
  content: any;
  cover_image: StrapiMediaFile | null;
  author: string | null;
  category: string | null;
  is_featured: boolean | null;
  published_date: string | null;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface StrapiCadModel {
  id: number;
  documentId: string;
  title: string;
  slug: string | null;
  description: string | null;
  thumbnail: StrapiMediaFile | null;
  model_file: StrapiMediaFile | null;
  category: string | null;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: StrapiPagination;
  };
}

interface StrapiSingleResponse<T> {
  data: T;
  meta: Record<string, unknown>;
}

// ── Provider Implementation ─────────────────────────────────

export class StrapiProvider implements CMSProvider {
  private readonly baseUrl: string;
  private readonly token: string;

  constructor() {
    const env = (
      globalThis as typeof globalThis & {
        process?: { env?: Record<string, string | undefined> };
      }
    ).process?.env;
    this.baseUrl = env?.STRAPI_API_URL || "";
    this.token = env?.STRAPI_API_TOKEN || "";

    if (!this.baseUrl) {
      console.warn("[CMS:Strapi] STRAPI_API_URL is not configured");
    }
  }

  // ── Research Papers ─────────────────────────────────────────

  async getResearchPapers(): Promise<ResearchPaper[]> {
    try {
      const url = new URL("/api/research-papers", this.baseUrl);
      url.searchParams.set("populate", "*");
      url.searchParams.set("pagination[pageSize]", "100");
      url.searchParams.set("sort", "year:desc");

      const json = await this.fetch<StrapiResponse<StrapiResearchPaper>>(url);
      return json.data.map((item) => this.mapToResearchPaper(item));
    } catch (error) {
      console.error("[CMS:Strapi] Failed to fetch research papers:", error);
      return [];
    }
  }

  // ── Blog Posts ──────────────────────────────────────────────

  async getBlogPosts(): Promise<BlogPost[]> {
    try {
      const url = new URL("/api/blogs", this.baseUrl);
      url.searchParams.set("populate", "*");
      url.searchParams.set("pagination[pageSize]", "100");
      url.searchParams.set("sort", "published_date:desc");

      const json = await this.fetch<StrapiResponse<StrapiBlogPost>>(url);
      return json.data.map((item) => this.mapToBlogPost(item));
    } catch (error) {
      console.error("[CMS:Strapi] Failed to fetch blog posts:", error);
      return [];
    }
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const url = new URL("/api/blogs", this.baseUrl);
      url.searchParams.set("populate", "*");
      url.searchParams.set("filters[slug][$eq]", slug);

      const json = await this.fetch<StrapiResponse<StrapiBlogPost>>(url);

      if (json.data.length === 0) return null;
      return this.mapToBlogPost(json.data[0]);
    } catch (error) {
      console.error(`[CMS:Strapi] Failed to fetch blog post "${slug}":`, error);
      return null;
    }
  }

  // ── CAD Models ──────────────────────────────────────────────

  async getCadModels(): Promise<CadModel[]> {
    try {
      const url = new URL('/api/cad-models', this.baseUrl);
      url.searchParams.set('populate', '*');
      url.searchParams.set('pagination[pageSize]', '100');
      url.searchParams.set('sort', 'createdAt:desc');

      const json = await this.fetch<StrapiResponse<StrapiCadModel>>(url);
      return json.data.map((item) => this.mapToCadModel(item));
    } catch (error) {
      console.error('[CMS:Strapi] Failed to fetch CAD models:', error);
      return [];
    }
  }

  async getCadModelBySlug(slug: string): Promise<CadModel | null> {
    try {
      const url = new URL('/api/cad-models', this.baseUrl);
      url.searchParams.set('populate', '*');
      url.searchParams.set('filters[slug][$eq]', slug);

      const json = await this.fetch<StrapiResponse<StrapiCadModel>>(url);

      if (json.data.length === 0) return null;
      return this.mapToCadModel(json.data[0]);
    } catch (error) {
      console.error(`[CMS:Strapi] Failed to fetch CAD model "${slug}":`, error);
      return null;
    }
  }

  // ── Shared fetch helper ─────────────────────────────────────

  private async fetch<T>(url: URL): Promise<T> {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    const res = await fetch(url.toString(), {
      headers,
      next: { revalidate: 60 },
    } as RequestInit & { next: { revalidate: number } });

    if (!res.ok) {
      throw new Error(`Strapi responded with ${res.status} ${res.statusText}`);
    }

    return res.json();
  }

  // ── Mappers ─────────────────────────────────────────────────

  private mapToResearchPaper(item: StrapiResearchPaper): ResearchPaper {
    return {
      id: item.documentId || String(item.id),
      title: item.title || "Untitled",
      authors: this.parseAuthors(item.authors),
      summary: item.summary,
      field: item.field,
      year: item.year,
      status: item.paper_status,
      paperLink: item.paper_link,
      pdfUrl: this.resolveMediaUrl(item.paper_pdf),
    };
  }

  private mapToBlogPost(item: StrapiBlogPost): BlogPost {
    return {
      id: item.documentId || String(item.id),
      slug: item.slug || item.documentId || String(item.id),
      title: item.title || "Untitled",
      excerpt: this.stripHtml(item.excerpt),
      content: this.blocksToHtml(item.content),
      coverImageUrl: this.resolveMediaUrl(item.cover_image),
      authorName: item.author,
      category: item.category,
      isFeatured: item.is_featured ?? false,
      publishedAt: item.published_date || item.publishedAt,
    };
  }

  private mapToCadModel(item: StrapiCadModel): CadModel {
    return {
      id: item.documentId || String(item.id),
      slug: item.slug || item.documentId || String(item.id),
      title: item.title || 'Untitled',
      description: item.description,
      thumbnailUrl: this.resolveMediaUrl(item.thumbnail),
      modelFileUrl: this.resolveMediaUrl(item.model_file),
      category: item.category,
    };
  }

  // ── Private helpers ─────────────────────────────────────────

  private parseAuthors(raw: string | null): string[] {
    if (!raw) return [];
    return raw
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean);
  }

  private resolveMediaUrl(media: StrapiMediaFile | null): string | null {
    if (!media?.url) return null;
    if (media.url.startsWith("http")) return media.url;
    return `${this.baseUrl}${media.url}`;
  }

  // ── Strapi Rich Text JSON to HTML compiler ────────────────

  private blocksToHtml(blocks: any): string | null {
    if (!blocks) return null;
    // If it's already a string (e.g. from standard text field)
    if (typeof blocks === "string") return blocks;
    // If it's an array (Strapi blocks format)
    if (Array.isArray(blocks)) {
      return blocks.map((b) => this.blockHtml(b)).join("");
    }

    // Safely render object as JSON if structure doesn't match array format
    // This debugs the [object Object] issue
    if (typeof blocks === "object") {
      try {
        return `<pre class="text-sm bg-slate-100 p-4 rounded-xl overflow-auto text-slate-800 font-mono">Unrecognized Strapi Content Format:\\n${JSON.stringify(blocks, null, 2)}</pre>`;
      } catch (e) {
        return String(blocks);
      }
    }

    return String(blocks);
  }

  private blockHtml(block: any): string {
    if (!block || typeof block !== "object") return "";
    switch (block.type) {
      case "paragraph":
        return `<p>${this.renderChildren(block.children)}</p>`;
      case "heading":
        return `<h${block.level || 2}>${this.renderChildren(block.children)}</h${block.level || 2}>`;
      case "list":
        const tag = block.format === "ordered" ? "ol" : "ul";
        const lis = block.children
          ?.map((item: any) => `<li>${this.renderChildren(item.children)}</li>`)
          .join("");
        return `<${tag}>${lis}</${tag}>`;
      case "quote":
        return `<blockquote>${this.renderChildren(block.children)}</blockquote>`;
      case "code":
        return `<pre><code>${this.renderChildren(block.children)}</code></pre>`;
      case "image":
        if (block.image) {
          const url = this.resolveMediaUrl(block.image);
          return `<img src="${url}" alt="${this.escapeHtml(block.image.alternativeText || "")}" />`;
        }
        return "";
      default:
        return `<p>${this.renderChildren(block.children)}</p>`;
    }
  }

  private renderChildren(children: any): string {
    if (!Array.isArray(children)) return "";
    return children
      .map((child: any) => {
        if (child.type === "text") {
          let text = this.escapeHtml(child.text || "");
          if (child.bold) text = `<strong>${text}</strong>`;
          if (child.italic) text = `<em>${text}</em>`;
          if (child.underline) text = `<u>${text}</u>`;
          if (child.strikethrough) text = `<s>${text}</s>`;
          if (child.code) text = `<code>${text}</code>`;
          return text;
        }
        if (child.type === "link") {
          return `<a href="${this.escapeHtml(child.url || "#")}">${this.renderChildren(child.children)}</a>`;
        }
        return "";
      })
      .join("");
  }

  private escapeHtml(text: string) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  private stripHtml(html: string | null): string | null {
    if (!html) return null;
    return html.replace(/<[^>]*>?/gm, "");
  }
}
