FROM node:22.12.0-bullseye AS dev

WORKDIR /app

RUN apt-get update && apt-get install -y docker.io

ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME\
    && chmod 0440 /etc/sudoers.d/$USERNAME

