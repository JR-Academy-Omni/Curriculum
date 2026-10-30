# Australian invoice review

- Six source files, five unique supplier/invoice/currency keys. 06 duplicates 01 and is not counted twice.
- Base-set amounts are AUD. Unique subtotal ex GST: 2650; GST shown: 265; total incl GST: 2915. Base arithmetic differences: zero.
- Supplier ABNs are supplied and pass format/checksum validation. Author review of ABR Lookup returned no matching records on 2026-10-30. Supplier identity/GST registration must therefore be verified before considering any credit. GST shown is not approved GST credit.
- NDS lacks due date and PO. Preserve blank values; do not confuse these operational fields with mandatory supplier ABN information.
- Optional extensions/05-stage-review.pdf retains the earlier 500 + 50 versus 560 discrepancy and older invoice wording. It is excluded from base totals.
- Tax-invoice heading alone does not establish validity. For totals of AUD1000 or more, the buyer identity is present; actual use requires verified supplier details and GST registration.

Sources:
https://business.gov.au/finance/payments-and-invoicing/how-to-invoice
https://smallbusiness.taxsuperandyou.gov.au/goods-and-services-tax/calculating-gst-on-sales
