const { UserTrip } = require('../models');

const UserTripData = [
  {
    user_id: 1,
    trip_id: 1,
  },
  {
    user_id: 2,
    trip_id: 1,
  },
  {
    user_id: 3,
    trip_id: 1,
  },
  {
    user_id: 1,
    trip_id: 2,
  },
  {
    user_id: 2,
    trip_id: 2,
  },
  {
    user_id: 2,
    trip_id: 3,
  },
];

const seedUserTrips = () => UserTrip.bulkCreate(UserTripData);

module.exports = seedUserTrips;
