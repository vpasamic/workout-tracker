var db = require("../models");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    let urlData = req.params;
    let data = req.body;
    db.Workout.updateOne(
      { _id: urlData.id },
      {
        $push: {
          exercises: [
            {
              type: data.type,
              name: data.name,
              duration: data.duration,
              distance: data.distance,
              weight: data.weight,
              reps: data.reps,
              sets: data.sets,
            },
          ],
        },
      }
    )
      .then((dbUpdate) => {
        res.json(dbUpdate);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
