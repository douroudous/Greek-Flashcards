class PagesController < ApplicationController
  def home
    @word = Word.all.sample
  end
end
