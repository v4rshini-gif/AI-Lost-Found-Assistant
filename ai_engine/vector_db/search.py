def search_vector(vector, index, k=5):
    return index.search(vector, k) if index else []
