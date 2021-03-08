FROM cyberjeevi/cjbot:latest

RUN git clone https://github.com/cyberjeevi/cjbot /root/cjbot
WORKDIR /root/cjbot/
ENV TZ=Europe/Istanbul
RUN npm install deepai
RUN npm install supervisor -g
RUN npm install

CMD ["node", "bot.js"]
