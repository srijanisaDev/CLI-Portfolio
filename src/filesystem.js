export const filesystem = {
  "~": {
    type: "dir",
    children: {
      "about": {
        type: "dir",
        children: {
          "bio.txt": {
            type: "file",
            content: `
Hey there! I am Srijan and I am happy to introduce you to myself.
I am a tech enthusiast which I have recently become (haha 😄).

I have been exploring the fields of Full Stack Web Development
and have quite some experience in Machine Learning and Deep Learning.
I love to share my learnings on GitHub so that it may benefit others.

The fact that tech can be so deep, amuses me a lot and this is
what makes me explore more and more.

Name        : Srijan
Role        : Full Stack Developer
Based       : Deoghar, Jharkhand, India
Email       : srijankumar770@gmail.com
            `
          },
          "education.txt": {
            type: "file",
            content: `
🎓 Education
─────────────────────────────
Degree      : B.Tech in Computer Science
University  : Kalinga Institute of Industrial Technology (KIIT)
              Bhubaneswar, India
Graduating  : 2027
            `
          },
          "skills.txt": {
            type: "file",
            content: `
💻 Programming Languages
─────────────────────────────
  C, C++, Python, Java, Dart, JavaScript

🧰 Frameworks & Libraries
─────────────────────────────
  TensorFlow, Scikit-learn, Node.js, MLflow,
  Streamlit, PostgreSQL

☁️  Platforms & Tools
─────────────────────────────
  GitHub, Vercel, Git
            `
          },
          "contact.txt": {
            type: "file",
            content: `
📬 Contact
─────────────────────────────
Email       : srijankumar770@gmail.com
Location    : Deoghar, Jharkhand, India
            `
          }
        }
      },
      "projects": {
        type: "dir",
        children: {
          "cyberpeace_bot.txt": {
            type: "file",
            content: `
🤖 CyberPeace Chatbot
─────────────────────────────
Event       : CyberPeace Hackathon by CyberPeace Foundation (Delhi NGO)
Prize       : 🥈 Second Place
Description : A chatbot that helps people who are victims of cybercrime
              by suggesting next steps and guiding them through the process.
GitHub      : https://github.com/srijanisaDev/CyberPeace_Hackathon
Live        : https://cyberspace.omprakash.me/
            `
          },
          "fraud_detection.txt": {
            type: "file",
            content: `
💳 Credit Card Fraud Detection
─────────────────────────────
Event       : Pandora's Paradox Hackathon by E-Cell
Description : A machine learning system to detect fraudulent
              credit card transactions in real time.
GitHub      : https://github.com/srijanisaDev
Stack       : Python, Scikit-learn, TensorFlow, Streamlit
            `
          },
          "more_projects.txt": {
            type: "file",
            content: `
🔗 More of my work:
  GitHub : https://github.com/srijanisaDev

  I keep sharing projects and learnings regularly.
  Feel free to explore and star anything useful! ⭐
            `
          },
          "why_no_bugs.txt": {
            type: "file",
            easter: true,
            content: `
🐛 Why are there no bugs in my projects?

  Because I promoted them all to "features". 😄
            `
          },
          "coffee.txt": {
            type: "file",
            easter: true,
            content: `
    ( (
     ) )
  ........
  |      |]
  \\      /
   '----'

  Every project here was powered by an unhealthy
  amount of coffee and Stack Overflow tabs. ☕

  (No, I don't copy-paste. I "adapt solutions". Big difference.)
            `
          },
          "secret.sh": {
            type: "file",
            easter: true,
            content: `
> sudo rm -rf /

Calculating files to delete...
████████████████████ 100%

Lol gotcha. Your files are safe.
I'm a portfolio, not a villain. 😄

(But seriously, never run that command.)
            `
          },
          "ml_confession.txt": {
            type: "file",
            easter: true,
            content: `
🤖 ML Developer Confession:

  My model had 99% accuracy on training data.
  It had 47% accuracy on real data.

  I called it "overfitting" in my report.
  My professor called it "a disaster".

  We were both right. 📉
            `
          }
        }
      },
      "achievements": {
        type: "dir",
        children: {
          "list.txt": {
            type: "file",
            content: `
🏆 Achievements
─────────────────────────────
🥈 Second Prize — CyberPeace Hackathon
   Conducted by CyberPeace Foundation, Delhi
   Built a cybercrime assistance chatbot
   Live: https://cyberspace.omprakash.me/

🤝 Participated — Pandora's Paradox Hackathon
   Conducted by E-Cell
   Built a Credit Card Fraud Detection System

💻 Active Open Source Contributor
   Regularly sharing projects & learnings on GitHub
   GitHub: https://github.com/srijanisaDev

🎓 Pursuing B.Tech CS at KIIT, Bhubaneswar (2027)
            `
          }
        }
      },
      "socials": {
        type: "dir",
        children: {
          "links.txt": {
            type: "file",
            content: `
🌐 Find me on the internet!
─────────────────────────────
GitHub    : https://github.com/srijanisaDev
LinkedIn  : https://www.linkedin.com/in/srijan-link
Instagram : https://www.instagram.com/_sri.jan/
Email     : srijankumar770@gmail.com
            `
          }
        }
      },
      "resume.pdf": {
        type: "file",
        content: `
📄 Srijan's Resume
─────────────────────────────
View / Download here:
https://drive.google.com/file/d/1NO1_TgpaU3GlUyiHTesfcaFFaMkj14on/view?usp=sharing
        `
      },
      "README.md": {
        type: "file",
        content: `
# Hey, Welcome to Srijan's Portfolio CLI! 👋

  This is an interactive terminal-style portfolio.
  Navigate around just like you would in a real terminal.

  Type 'help' to see all available commands.
  There are easter eggs hidden in projects/. Happy hunting! 🥚

  — Srijan
        `
      }
    }
  }
};
