// Forward declaration of guess API.
// @param num, your guess
// @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
int guess(int num);

class Solution {
public:
    int guessNumber(int n) {
        int lh = 1;
        int rh = n;
        while (lh <= rh) {
            int mh = (lh / 2 + rh / 2) + (lh % 2 == 1 && rh % 2 == 1 ? 1 : 0);
            int r = guess(mh);
            if (r == 0) {
                return mh;
            };
            if (r == 1) {
                lh = mh + 1;
            };
            if (r == -1) {
                rh = mh - 1;
            };
        };
        return lh;
    };
};

// 注意整型相加别超范围