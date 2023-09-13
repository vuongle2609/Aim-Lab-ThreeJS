import Navigo from "navigo"; // When using ES modules.
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

export const scene = app.gameScene.scene;
export const gui = app.gameScene.gui;
export const sceneGun = app.gameScene.sceneGun;
