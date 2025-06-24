import random

# Gene holds a value: 0 or 1
class Gene:
    def __init__(self):
        self.value = random.choice([0, 1])  # Pick randomly 0 or 1

    def mutate(self):
        self.value = 1 - self.value  # Flip: 0->1 or 1->0

# Chromosome holds 10 genes
class Chromosome:
    def __init__(self):
        self.genes = [Gene() for _ in range(10)]

    def mutate(self):
        # 50% chance to flip
        for gene in self.genes:
            if random.random() < 0.5:
                gene.mutate()

    def is_all_ones(self):
        return all(gene.value == 1 for gene in self.genes)

# DNA holds 10 chromosomes
class DNA:
    def __init__(self):
        self.chromosomes = [Chromosome() for _ in range(10)]

    def mutate(self):
        for chromo in self.chromosomes:
            if random.random() < 0.5:  # 50% chance to mutate chromosome
                chromo.mutate()

    def is_all_ones(self):
        return all(chromo.is_all_ones() for chromo in self.chromosomes)

# Organism has DNA and lives in an environment (chance to mutate)
class Organism:
    def __init__(self, environment):
        self.dna = DNA()
        self.environment = environment

    def mutate(self):
        if random.random() < self.environment:
            self.dna.mutate()

# def main():
#     organism = Organism(environment=0.8)
#     generations = 0
#     max_generations = 1000000  # Prevent infinite loop

#     while not organism.dna.is_all_ones() and generations < max_generations:
#         organism.mutate()
#         generations += 1

#     if organism.dna.is_all_ones():
#         print(f"All genes are 1 after {generations} generations!")
#     else:
#         print("Did not reach all ones within the generation limit.")
# main()
