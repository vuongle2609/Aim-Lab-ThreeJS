import GameScene from "./gameScene";
import { HomePage } from "./pages/home";
import "./style.css";

// const router = new Navigo("/");

class MainApp {
  home = new HomePage();
  gameScene = new GameScene();

  constructor() {
    this.initialize();
  }

  initialize() {
    this.home.render();
  }
}

const app = new MainApp();

export const gameScene = app.gameScene;
export const gui = app.gameScene.gui;
