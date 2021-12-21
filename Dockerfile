FROM node:17-alpine  

WORKDIR /app 

COPY package.json ./ 
COPY yarn.lock ./ 

RUN yarn 

COPY . . 

ENV PORT=8000 

EXPOSE 8000 

CMD ["yarn", "dev"] 