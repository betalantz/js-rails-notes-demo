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
        note = Note.new(note_params)
        if note.save
            render json: note, status: 200
        else
            render json: {error: "Failed to create note", status: 500}
        end
    end
    
    def update
        note = Note.find(params[:id])
        note = Note.update(note_params)
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
