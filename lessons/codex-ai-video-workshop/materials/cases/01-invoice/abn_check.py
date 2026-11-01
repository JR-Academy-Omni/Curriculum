"""Local ABN format/checksum check. Does not query registration or GST status."""
import re
WEIGHTS = (10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19)
def check_abn(value):
    digits = re.sub(r'\s+', '', value)
    if not re.fullmatch(r'[0-9]{11}', digits):
        return {'format_valid': False, 'checksum_valid': False}
    values = [int(x) for x in digits]
    values[0] -= 1
    return {'format_valid': True, 'checksum_valid': sum(x*w for x,w in zip(values, WEIGHTS)) % 89 == 0}
if __name__ == '__main__':
    import sys, json
    print(json.dumps({value: check_abn(value) for value in sys.argv[1:]}, indent=2))
