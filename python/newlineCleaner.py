from msvcrt import getch
with open("input.txt", "r", encoding="utf-8") as fptr:
    lines = fptr.read().replace("\n", "").replace("\t", "")
    print(lines)
getch()