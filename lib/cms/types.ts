/**
 * CMS-Agnostic Domain Types
 *
 * These types define the canonical data shapes used throughout the application.
 * They are intentionally decoupled from any specific CMS vendor.
 *
 * ┌─────────────────────────────────┐
 * │  To swap CMS providers:         │
 * │  1. Create a new adapter in     │
 * │     lib/cms/providers/          │
 * │  2. Implement CMSProvider       │
 * │  3. Update the factory in       │
 * │     lib/cms/index.ts            │
 * │  4. Update .env                 │
 * │  Pages & components stay as-is. │
 * └─────────────────────────────────┘
 */

// ── Research Paper ───────────────────────────────────────────

export interface ResearchPaper {
  /** Unique identifier (CMS-agnostic) */
  id: string;

  /** Paper title */
  title: string;

  /** List of author names */
  authors: string[];

  /** Abstract / summary */
  summary: string | null;

  /** Research field / category (e.g. "Robotics", "Patent") */
  field: string | null;

  /** Publication year */
  year: number | null;

  /** Publication status (e.g. "Published", "Under Review", "Granted") */
  status: string | null;

  /** External link to the paper (DOI, ResearchGate, etc.) */
  paperLink: string | null;

  /** Direct URL to the uploaded PDF, if available */
  pdfUrl: string | null;
}

// ── Derived Stats ────────────────────────────────────────────

export interface CMSStats {
  totalPapers: number;
  publishedPapers: number;
  patentsFiled: number;
  activeYears: string;
}

// ── Blog Post ────────────────────────────────────────────────

export interface BlogPost {
  /** Unique identifier (CMS-agnostic) */
  id: string;

  /** URL-friendly slug */
  slug: string;

  /** Blog post title */
  title: string;

  /** Short excerpt / summary for card display */
  excerpt: string | null;

  /** Full article body (HTML or rich text) */
  content: string | null;

  /** Cover image URL for cards and hero banner */
  coverImageUrl: string | null;

  /** Author display name */
  authorName: string | null;

  /** Category (e.g. "Robotics", "Sustainability") */
  category: string | null;

  /** Whether this post is featured / highlighted */
  isFeatured: boolean;

  /** Publication date as ISO string */
  publishedAt: string | null;
}

// ── CAD Model ────────────────────────────────────────────────

export interface CadModel {
  /** Unique identifier (CMS-agnostic) */
  id: string;

  /** URL-friendly slug for routing */
  slug: string;

  /** Model display name */
  title: string;

  /** Brief description */
  description: string | null;

  /** Thumbnail image URL for gallery cards */
  thumbnailUrl: string | null;

  /** URL to the 3D model file (.glb / .gltf) */
  modelFileUrl: string | null;

  /** Category (Enumeration — e.g. "Robotics", "Aerospace") */
  category: string | null;
}

// ── CMS Provider Interface ──────────────────────────────────

export interface CMSProvider {
  /**
   * Fetch all research papers from the CMS.
   * Implementations should handle errors gracefully and return
   * an empty array on failure.
   */
  getResearchPapers(): Promise<ResearchPaper[]>;

  /**
   * Fetch all blog posts from the CMS.
   * Implementations should handle errors gracefully and return
   * an empty array on failure.
   */
  getBlogPosts(): Promise<BlogPost[]>;

  /**
   * Fetch a single blog post by its slug.
   * Returns null if not found or on error.
   */
  getBlogPostBySlug(slug: string): Promise<BlogPost | null>;

  /**
   * Fetch all CAD models from the CMS.
   * Implementations should handle errors gracefully and return
   * an empty array on failure.
   */
  getCadModels(): Promise<CadModel[]>;

  /**
   * Fetch a single CAD model by its slug.
   * Returns null if not found or on error.
   */
  getCadModelBySlug(slug: string): Promise<CadModel | null>;
}
