class BoatSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :length, :color
end
