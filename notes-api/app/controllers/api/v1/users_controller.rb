class Api::V1::UsersController < ApplicationController
  def login
    user = User.find_or_create_by(name: params[:name])
    render json: user, status: 200
  end
end
