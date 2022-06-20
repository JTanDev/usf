def print_upper_words(words, letters):
    '''Will only print the words within a given list that start with any of the letters within the letters list given. '''

    for word in words:
        for letter in letters:
            if word[0] == letter:
                print(f'{word.upper()}')


print_upper_words(["hello", "hey", "goodbye", "yo", "yes"], ["h", "y"])
