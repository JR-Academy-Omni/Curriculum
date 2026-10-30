# October orders: cleaning rules

Fictional training data. Currency: AUD. Source row 1 is the header.

- Slash dates use DD/MM/YYYY; ISO dates are YYYY-MM-DD. Reject impossible dates.
- Trim whitespace; normalize city and status capitalization. Allowed cities: Brisbane, Sydney, Melbourne. Allowed statuses: Paid, Pending, Refunded.
- A negative quantity is valid only when status is Refunded. Quantity must otherwise be a positive integer; unit price must be positive.
- Duplicate key: order_id. If all normalized fields agree, retain the first source row and log the duplicate. If fields conflict, quarantine every row for that ID.
- Missing quantity and invalid dates are exceptions; do not impute.
- Signed order value = quantity × unit_price. Summarize accepted rows only, with refunds negative. Pending is not collected cash.
- Original input is immutable. Keep provenance. Re-run from the source file, not a previously cleaned result.
