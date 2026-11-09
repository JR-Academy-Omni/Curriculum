import sys
from pathlib import Path

import pytest

sys.path.insert(0, str(Path(__file__).parent.parent))


@pytest.fixture
def desk(tmp_path, monkeypatch):
    from desk import Desk
    monkeypatch.setenv("DESK_RUNTIME", str(tmp_path))
    return Desk(tmp_path)
