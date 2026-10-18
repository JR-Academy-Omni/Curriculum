# Facilitator delivery

Give students only the core `opc-founder-os` plus the current week's skill. Do not release future-week answers as a static prompt dump.

Before class:

1. Run `build_weekly_pack.py --week N --output <directory>`.
2. Inspect the ZIP manifest and current weekly `SKILL.md`.
3. Test the default prompt on a redacted sample workspace.
4. Share the ZIP or install it into the approved student agent environment.
5. Explain the week's external evidence gate in class.

After class:

1. Collect evidence references through the approved course workflow, not private PII in Git.
2. Record common blockers without copying student or customer identities.
3. Update the weekly skill only from repeated observed failures.
4. Rebuild the ZIP with a new checksum; never silently overwrite a previously distributed package.
