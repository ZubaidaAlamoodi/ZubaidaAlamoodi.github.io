const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const projectMedia = document.querySelectorAll(".project-vidbox video");
const projectButtons = document.querySelectorAll("[data-project]");
const modal = document.querySelector(".portfolio-modal");
const modalTitle = document.querySelector("#modal-title");
const modalBody = document.querySelector("#modal-body");
const modalClose = document.querySelector(".modal-close");
const contactForm = document.querySelector("#contactForm");
const sendBtn = document.querySelector("#sendBtn");
const toast = document.querySelector("#toast");
const scrollDown = document.querySelector(".scroll-down");

const contactEmail = "zubaidamoodi9@outlook.com";

const projectDetails = {
  amaan: {
    title: "Amaan Traveller's Companion",
    body: `
      <div class="detail-grid">
        <section><span>Problem</span><p>Travellers often need separate platforms for destination research, visa requirements, risks, insurance choices, and travel documents.</p></section>
        <section><span>Solution</span><p>Amaan Traveller's Companion is a mobile app that combines destination search, visa/risk guidance, insurance support, purchased policy documents, and AI help in one platform.</p></section>
        <section><span>Tools</span><p>Flutter, Dart, Python, Flask, Supabase, Android Studio, Android build tools, Xcode.</p></section>
        <section><span>Cybersecurity</span><p>Built with authentication, access control, secure data handling, admin monitoring, and future-ready privacy protections.</p></section>
      </div>`
  },
  veritaslens: {
    title: "VeritasLens Deepfake Detection",
    body: `
      <div class="detail-grid">
        <section><span>Problem</span><p>Manipulated deepfake media can damage trust and spread misinformation.</p></section>
        <section><span>Solution</span><p>A web platform that detects and verifies manipulated deepfakes while tracking related cyber incidents.</p></section>
        <section><span>Tools</span><p>AWS, Python, React, HTML, JavaScript, CSS, ML algorithms.</p></section>
        <section><span>Outcome</span><p>Promotes digital trust, cybersecurity awareness, and Bahrain cyber law aligned reporting.</p></section>
      </div>`
  },
  phishing: {
    title: "It All Started With a Click",
    body: `
      <div class="detail-grid">
        <section><span>Problem</span><p>Phishing links are easy to miss unless trends and suspicious patterns are made visible.</p></section>
        <section><span>Solution</span><p>Analysed phishing URL datasets to identify attack trends, vulnerabilities, and response strategies.</p></section>
        <section><span>Tools</span><p>Python, Power BI, Tableau.</p></section>
        <section><span>Outcome</span><p>Interactive dashboards and security insights for faster decision-making.</p></section>
      </div>`
  },
  ddos: {
    title: "Detecting DDoS Attacks in Smart Cities",
    body: `
      <div class="detail-grid">
        <section><span>Problem</span><p>Smart city IoT networks are vulnerable to traffic floods and service disruption.</p></section>
        <section><span>Solution</span><p>Built machine learning models to detect IoT-based DDoS attacks using CICIoT2023.</p></section>
        <section><span>Tools</span><p>Python, Google Colab, machine learning algorithms.</p></section>
        <section><span>Outcome</span><p>Identifies harmful network traffic patterns to support infrastructure security.</p></section>
      </div>`
  },
  defense: {
    title: "Layered Security for GCC Corporations",
    body: `
      <div class="detail-grid">
        <section><span>Problem</span><p>Large GCC corporate environments need protection across network, access, and incident response layers.</p></section>
        <section><span>Solution</span><p>Designed a defense-in-depth strategy covering threat detection, VPNs, IDS/IPS, and response cycles.</p></section>
        <section><span>Tools</span><p>Cisco Packet Tracer, firewalls, IDS/IPS, AAA, EDR/XDR, DHCP snooping.</p></section>
        <section><span>Outcome</span><p>A stronger multi-layered security posture for sensitive corporate systems.</p></section>
      </div>`
  },
  compliance: {
    title: "ICBC Bank Cybersecurity Compliance",
    body: `
      <div class="detail-grid">
        <section><span>Problem</span><p>Banking security needs clear alignment between policy, risk controls, and compliance standards.</p></section>
        <section><span>Solution</span><p>Created a compliance framework to align policies, risk management, and monitoring for ICBC Bank.</p></section>
        <section><span>Frameworks</span><p>PCI DSS, NIST, ISO 27001, GDPR.</p></section>
        <section><span>Outcome</span><p>Clearer governance practices and a stronger monitoring approach.</p></section>
      </div>`
  },
  cv: {
    title: "CV Snapshot",
    body: `
      <div class="detail-grid">
        <section><span>Profile</span><p>Curious and tech-driven cybersecurity graduate skilled in frameworks, threat hunting, and programming.</p></section>
        <section><span>Experience</span><p>Software Developer Intern at Raincode Bahrain and Data Analytics Immersive Fellow at General Assembly.</p></section>
        <section><span>Strengths</span><p>Network protocols, Windows, Linux, machine learning, AWS, Azure, UI/UX, threat hunting, cybersecurity frameworks.</p></section>
        <section><span>Highlights</span><p>2nd place Cyber Escape Challenge, PL-400 training, IELTS 7.0.</p></section>
      </div>`
  }
};

function showToast(message, type = "success") {
  if (!toast) return;
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.className = "toast";
  }, 4200);
}

function openModal(key) {
  const detail = projectDetails[key];
  if (!modal || !detail) return;
  modalTitle.textContent = detail.title;
  modalBody.innerHTML = detail.body;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function playProjectVideos() {
  projectMedia.forEach((video) => {
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    const playRequest = video.play();
    if (playRequest) {
      playRequest.catch(() => {
        // Some mobile browsers wait for the first user interaction before autoplaying.
      });
    }
  });
}

playProjectVideos();
document.addEventListener("touchstart", playProjectVideos, { once: true });
document.addEventListener("click", playProjectVideos, { once: true });

projectButtons.forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.project));
});

menu?.addEventListener("click", () => {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

closeIcon?.addEventListener("click", () => {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});

sideBar?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
  });
});

scrollDown?.addEventListener("click", () => {
  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
});

modalClose?.addEventListener("click", closeModal);
modal?.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

if (window.emailjs) {
  emailjs.init("fGB7WW84J4fUle8U8");
}

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim();
  const message = formData.get("message")?.trim();

  if (!name || !email || !message) {
    showToast("Please fill out all fields before sending.", "error");
    return;
  }

  sendBtn.disabled = true;
  sendBtn.innerHTML = "Sending... <i class='bx bx-loader-alt bx-spin'></i>";

  const params = {
    from_name: name,
    from_email: email,
    reply_to: email,
    message
  };

  try {
    if (!window.emailjs) throw new Error("EmailJS is not available.");
    await emailjs.send("service_p8nczpb", "template_1h5ob6g", params);
    contactForm.reset();
    showToast("Message sent successfully. Thank you for reaching out.");
  } catch (error) {
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    showToast("Opening your email app as a backup so the message still gets to Zubaida.", "info");
    console.error(error);
  } finally {
    sendBtn.disabled = false;
    sendBtn.innerHTML = "Send Message <i class='bx bx-mail-send'></i>";
  }
});
