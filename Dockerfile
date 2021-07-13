FROM node:16-alpine
COPY . /app
WORKDIR /app
EXPOSE 3000
ENV PORT=3000
RUN npm install
CMD ["node", "server.js"]