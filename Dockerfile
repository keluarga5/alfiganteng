FROM node:16.13.0

RUN apt-get update && \
  apt-get install -y \
  neofetch \
  chromium \
  ffmpeg \
  webp \
  wget \
  imagemagick && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .
RUN npm install -g npm@latest
RUN npm install
RUN npm instal pm2 -g



COPY . .
EXPOSE 5000

CMD ["pm2-runtime", "index.js"]`
