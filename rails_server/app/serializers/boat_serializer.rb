class BoatSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :length, :color, :docker_number
end
