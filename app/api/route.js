import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // ==============================
    // GET FORM DATA
    // ==============================

    const formData = await req.formData();

    const name = formData.get("name");
    const phone = formData.get("phone");
    const city = formData.get("city");
    const state = formData.get("state");
    const pincode = formData.get("pincode");

    const course = formData.get("course");
    const year = formData.get("year");
    const collegeName = formData.get("collegeName");

    const strength = formData.get("strength");
    const weakness = formData.get("weakness");
    const keySkills = formData.get("keySkills");

    const roles = formData.getAll("roles");

    const linkedin = formData.get("linkedin");
    const github = formData.get("github");

    const resume = formData.get("resume");

    // ==============================
    // VALIDATE RESUME
    // ==============================

    if (!resume || typeof resume === "string") {
      return Response.json(
        {
          success: false,
          message: "Resume was not received. Please select a resume file.",
        },
        { status: 400 }
      );
    }

    console.log("Resume received:");
    console.log("Name:", resume.name);
    console.log("Type:", resume.type);
    console.log("Size:", resume.size);

    if (resume.size === 0) {
      return Response.json(
        {
          success: false,
          message: "The uploaded resume is empty.",
        },
        { status: 400 }
      );
    }

    // ==============================
    // CHECK ENVIRONMENT VARIABLES
    // ==============================

    console.log("SMTP HOST:", process.env.SMTP_HOST);
    console.log("SMTP PORT:", process.env.SMTP_PORT);
    console.log("SMTP USER:", process.env.SMTP_USER);
    console.log("HR EMAIL:", process.env.HR_EMAIL);

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.HR_EMAIL
    ) {
      console.error("Missing SMTP environment variables.");

      return Response.json(
        {
          success: false,
          message: "Email configuration is incomplete.",
        },
        { status: 500 }
      );
    }

    // ==============================
    // CONVERT RESUME TO BUFFER
    // ==============================

    const bytes = await resume.arrayBuffer();
    const resumeBuffer = Buffer.from(bytes);

    const attachments = [
      {
        filename: resume.name,
        content: resumeBuffer,
        contentType: resume.type || "application/octet-stream",
      },
    ];

    console.log("Resume buffer size:", resumeBuffer.length);

    // ==============================
    // CREATE GMAIL TRANSPORTER
    // ==============================

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),

      // Gmail SMTP port 465 uses secure TLS
      secure: false,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ==============================
    // TEST SMTP CONNECTION
    // ==============================

    console.log("Checking SMTP connection...");

    await transporter.verify();

    console.log("SMTP connection successful.");

    // ==============================
    // SEND EMAIL
    // ==============================

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.HR_EMAIL,

      subject: `New Job Application - ${
        roles.length > 0
          ? roles.join(", ")
          : "Career Application"
      }`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          color: #1e293b;
          max-width: 700px;
          margin: 0 auto;
        ">

          <h2 style="color:#008ba3;">
            New Career Application
          </h2>

          <p>
            A new candidate has submitted a career application.
          </p>

          <hr />

          <h3 style="color:#008ba3;">
            Personal Information
          </h3>

          <p>
            <strong>Name:</strong>
            ${name || "N/A"}
          </p>

          <p>
            <strong>Phone:</strong>
            ${phone || "N/A"}
          </p>

          <p>
            <strong>City:</strong>
            ${city || "N/A"}
          </p>

          <p>
            <strong>State:</strong>
            ${state || "N/A"}
          </p>

          <p>
            <strong>Pincode:</strong>
            ${pincode || "N/A"}
          </p>

          <hr />

          <h3 style="color:#008ba3;">
            Education
          </h3>

          <p>
            <strong>Course:</strong>
            ${course || "N/A"}
          </p>

          <p>
            <strong>Year:</strong>
            ${year || "N/A"}
          </p>

          <p>
            <strong>College:</strong>
            ${collegeName || "N/A"}
          </p>

          <hr />

          <h3 style="color:#008ba3;">
            About Applicant
          </h3>

          <p>
            <strong>Strength:</strong><br />
            ${strength || "N/A"}
          </p>

          <p>
            <strong>Weakness:</strong><br />
            ${weakness || "N/A"}
          </p>

          <p>
            <strong>Key Skills:</strong><br />
            ${keySkills || "N/A"}
          </p>

          <hr />

          <h3 style="color:#008ba3;">
            Applied Roles
          </h3>

          <p>
            <strong>Roles:</strong>
            ${
              roles.length > 0
                ? roles.join(", ")
                : "N/A"
            }
          </p>

          <hr />

          <h3 style="color:#008ba3;">
            Online Profiles
          </h3>

          <p>
            <strong>LinkedIn:</strong>
            ${
              linkedin
                ? `<a href="${linkedin}" target="_blank">
                    ${linkedin}
                  </a>`
                : "N/A"
            }
          </p>

          <p>
            <strong>GitHub:</strong>
            ${
              github
                ? `<a href="${github}" target="_blank">
                    ${github}
                  </a>`
                : "N/A"
            }
          </p>

          <hr />

          <p style="color:#64748b;">
            Resume attached:
            <strong>${resume.name}</strong>
          </p>

        </div>
      `,

      attachments,
    });

    console.log("Application email sent successfully.");

    return Response.json({
      success: true,
      message: "Application submitted successfully!",
    });

  } catch (error) {
    console.error("=================================");
    console.error("CAREER API ERROR");
    console.error("=================================");
    console.error(error);

    return Response.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending the application.",
      },
      { status: 500 }
    );
  }
}
