module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      user: "u357571324",
      host: "86.38.202.213",
      ref: "origin/main",
      repo: "https://github.com/Graduation-O6u/Graduation-web.git",
      path: "/home/u357571324/public_html/jobber/Graduation-web",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
