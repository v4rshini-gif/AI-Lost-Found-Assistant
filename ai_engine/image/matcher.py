def match_image(query_image: str, candidates: list[str]) -> list[dict]:
    return [{"candidate": item, "score": 0.5} for item in candidates]
