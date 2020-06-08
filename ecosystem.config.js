module.exports = {
  apps: [{
    name: 'desafio-pokemon',
    script: 'src/app.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one',
    instances: 4,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],

  deploy: {
    production: {
      user: 'node',
      host: 'pokemonrebeca.com.br',
      ref: 'origin/master',
      repo: 'github.com/rebecaborges/desafio-pokemon',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
    },
  },
}
