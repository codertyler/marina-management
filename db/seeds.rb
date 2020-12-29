# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

boats = Boat.create ([
  {
    name: "Peppa",
    length: 10.2,
    color: "green",
    docker_number: 1
  },
  {
    name: "George",
    length: 8.5,
    color: "blue",
    docker_number: 3
  },
  {
    name: "Zuzu",
    length: 5,
    color: "red",
    docker_number: 7
  }
])