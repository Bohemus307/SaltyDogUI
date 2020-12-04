FROM node:14.13.1-alpine
RUN mkdir -p /src
WORKDIR /src
COPY . /src
RUN npm install --verbose
RUN npx prisma generate
RUN npm run build
EXPOSE 3030
CMD ["npm", "start"]