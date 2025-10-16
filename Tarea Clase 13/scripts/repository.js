import { Activity } from "./activity.js";

export class Repository {
  constructor() {
    this.activities = [];
  }

  createActivity(id, title, description, imgUrl) {
    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
    console.log("Actividad agregada:", activity);
  }

  getAllActivities() {
    return this.activities;
  }

  deleteActivity(id) {
    this.activities = this.activities.filter(activity => activity.id !== id);
    console.log(`Actividad con id ${id} eliminada`);
  }
}
