import express from "express";
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port : 3000 });

const gameManager = new GameManager()

wss.on("connection", (ws)=> {
    gameManager.addUser(ws)
    ws.on("disconnect", ()=> gameManager.removeUser(ws))
});

