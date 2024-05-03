import random
word = ["wachi" , "mie"]
life = 1

def update(sec,guess,clue):
    for i in range(len(sec)):
        if (guess == sec[i]):
            clue[i] = guess
    win = "".join(clue) == sec
    return win

while(len(word) > 0):
    random.shuffle(word)
    sec = word.pop()
    clue = list("?"*len(sec))
    while True:
        print(clue)
        guess = input("ทายมาาา: ")

        if guess in sec:
            win = update(sec,guess,clue)
            if win:
                print(clue)
                break