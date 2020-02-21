class Api::V1::NotesController < ApplicationController

    def index
        notes = Note.all

        render json: notes, status: 200
    end

    def show
        note = Note.find(params[:id])
        render json: note, status: 200
    end
    
    def create
        curr_user = User.find_by(id: params[:note][:user_id])
        note = curr_user.notes.build(note_params)
        if note.save
            render json: note, status: 200
        else
            render json: {error: "Failed to create note", status: 500}
        end
    end
    
    def update
        if params[:id] != 'undefined'
            note = Note.find(params[:id])
            note.update(note_params)
            render json: note, status: 200
        end
    end
    
    def destroy
        note = Note.find(params[:id])
        note.delete
        render json: {noteID: note.id}
    end
    

    private

    def note_params
        params.require(:note).permit(:body)
    end
end
