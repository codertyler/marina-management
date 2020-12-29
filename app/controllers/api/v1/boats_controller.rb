module Api
  module V1
    class BoatsController < ApplicationController
      
      #Preventing Invalid Authenticity Token Error
      protect_from_forgery with: :null_session

      
      #/api/v1/boats
      def index

        boats = Boat.all

        render json: BoatSerializer.new(boats).serialized_json

      end

      def show
        boat = Boat.find_by(name: params[:name])

        render json: BoatSerializer.new(boat).serialized_json
      end

      def create
        boat = Boat.new(boat_params)

        if boat.save
          render json: BoatSerializer.new(boat).serialized_json
        else
          render json: errors(boat), status: 422
        end

      end

      def update
        boat = Boat.find_by(name: params[:name])

        if boat.update(boat_params)
          render json: BoatSerializer.new(boat).serialized_json
        else
          render json: errors(boat), status: 422
        end

      end

      def destroy
        boat = Boat.find_by(name: params[:name])

        if boat.destroy
          head :no_content
        else
          render json: errors(boat), status: 422
        end

      end


      private 

      def boat_params
      
          params.require(:boat).permit(:name, :length, :color, :docker_number)

      end

    end

  end
end