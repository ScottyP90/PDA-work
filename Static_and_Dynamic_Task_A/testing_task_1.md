### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card)
    if card.value = 1 # need to be == rather than =
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # dif should be def. also it should be (card1, card2)
  if card1.value > card2.value
    return card # should be card1
  else
    return card2
  end
end # should be indented as it ends the CardGame class early.
end #extra end is not need.

def self.cards_total(cards) # should be indented.
  total # total should be total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total #should be moved out of the for loop and put before the def end. Also the total should be in the string as #{total}
  end #needs one more end to finish the def.
end
```
