user_elo = int(input())
test_elo = int(input())
questions_count = int(input())
mistakes = int(input())

elo = 0
test_elo -= test_elo / questions_count * mistakes  # reducing from the test elo for every mistake
k = int((test_elo / user_elo) * 100) - 71  # checking if result its over 75% from the user elo

if k == abs(k):  # adding if more
    elo += k // 4
else:  # removing if less
    k = 1 - k
    elo -= k

print(elo)
