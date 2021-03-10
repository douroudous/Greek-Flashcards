class CreateGuesses < ActiveRecord::Migration[6.0]
  def change
    create_table :guesses do |t|
      t.boolean :correct
      t.references :word, null: false, foreign_key: true

      t.timestamps
    end
  end
end
