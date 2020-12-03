FROM node:14.13.1-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install --verbose
RUN npx prisma generate
RUN npm run react-dev
EXPOSE 3030
CMD ["npm", "run", "server-dev"]