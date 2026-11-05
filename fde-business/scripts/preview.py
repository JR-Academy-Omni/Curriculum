#!/usr/bin/env python3
"""Shared read-only curriculum preview for both FDE courses."""
import runpy
from pathlib import Path
runpy.run_path(str(Path(__file__).resolve().parents[2]/'fde-tech/scripts/preview.py'),run_name='__main__')
