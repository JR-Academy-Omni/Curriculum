# Australian invoice extraction and GST checks

Preserve source documents. Apply the base task in prompt.txt.

## Completion checks

- Six source rows; five unique invoice keys; one duplicate.
- Unique subtotal excluding GST: AUD 2650.00; GST shown: AUD 265.00; total including GST: AUD 2915.00.
- Base-set amount and GST differences are zero.
- All five unique ABNs pass the 11-digit format and modulus-89 checksum. ABR records and GST registration are a separate check; do not treat stated GST as approved credit.
- 03-north has no due date or PO; these are not the same as missing mandatory ABN information.
- The separate extension has a stated 560.00 versus 500.00 + 50.00; do not mix it into base totals.

## Sources

- https://business.gov.au/finance/payments-and-invoicing/how-to-invoice
- https://smallbusiness.taxsuperandyou.gov.au/goods-and-services-tax/calculating-gst-on-sales
