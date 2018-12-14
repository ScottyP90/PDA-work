require('minitest/autorun')
require('minitest/rg')
require_relative('../card.rb')
require_relative('../card_game.rb')

class TestCardGame < MiniTest::Test

  def setup
    @hand1 = Card.new "Spade", 1
    @hand2 = Card.new "Heart", 20
    @cards = [@hand2,@hand1]
  end

  def test_1
    game = CardGame.new
    assert_equal(true, game.checkforAce(@hand1))
  end

  def test_2
    game = CardGame.new
    assert_equal(@hand2,game.highest_card(@hand1,@hand2))
  end

  def test_3
    assert_equal("You have a total of 21",CardGame.cards_total(@cards))
  end

end
