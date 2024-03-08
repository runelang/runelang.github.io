# RuneLang Documentation

## Overview

RuneLang is an enchanting programming language, drawing inspiration from the mystique of ancient runes and the adventurous tales of medieval fantasy. It is designed to transform conventional coding into a narrative resembling epic quests and mythical sagas, thereby offering developers a novel experience while coding.

## Lexicon

### Variables

- **Flagstone**: A boolean variable type.
- **Runestone**: A string variable type.
- **Countstone**: An integer variable type.

### Functions

- **Ritual**: Defines a function.

### Control Flow

- **Quest**: Represents conditional statements (`if`/`else`).
- **Odyssey**: A loop construct similar to `for`.
- **Vigil**: A loop construct similar to `while`.

### Operators

- **is written as**: Assignment operator.
- **matches**: Equality comparison operator.
- **is**: Used for both assignment and comparison, contextually.
- **from**: Indicates the start of a range or sequence.
- **to**: Indicates the end of a range or sequence.
- **and**: Logical AND operator.
- **or**: Logical OR operator.

### Output

- **Chant**: Print something to the console.

## Syntax Guide

### Defining Variables

```runelang
Flagstone booleanVariable is Truth;
Runestone stringVariable is "approach";
Countstone intVariable is 12;
```

### Function Declaration

```runelang
Ritual approach_dungeon() begins
    // Function body
end of Ritual
```

### Conditional Statements

```runelang
Quest begins when (booleanVariable is Truth and stringVariable matches "approach" or intVariable is 12)
    // Quest block
elsewise
    // Alternate path
end of Quest
```

### Loops

#### Odyssey (For Loop)

```runelang
Odyssey for Countstone steps from 1 to 10 is
    Chant("Counting steps: " + steps);
end of Odyssey
```

#### Vigil (While Loop)

```runelang
Countstone torchesToLight = 3;
Vigil whilst torchesToLight > 0 is
    Chant("A torch flickers in the darkness.");
    torchesToLight is written as torchesToLight - 1;
end of Vigil
```

## Examples

Here are some examples of RuneLang in action:

**Variable Declarations and Function Definition**

```runelang
Flagstone booleanVariable is Truth;
Runestone stringVariable is "approach";
Countstone intVariable is 12;

Ritual approach_dungeon() begins
    Scroll of Fate survive;

    Quest begins when (booleanVariable is Truth and stringVariable matches "approach" or intVariable is 12)
        survive is written as Truth;
    elsewise
        survive is written as Falsehood;
    end of Quest

    returneth survive;
end of Ritual
```

**Loops**

```runelang
// Odyssey (For Loop)
Odyssey for Countstone steps from 1 to 10 is
    Chant("Counting steps: " + steps);
end of Odyssey

// Vigil (While Loop)
Countstone torchesToLight = 3;
Vigil whilst torchesToLight > 0 is
    Chant("A torch flickers in the darkness.");
    torchesToLight is written as torchesToLight - 1;
end of Vigil
```

May your coding journey with RuneLang be as epic as the quests of Heroes of Yore.
