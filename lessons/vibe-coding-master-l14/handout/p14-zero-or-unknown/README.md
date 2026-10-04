# P14 · 交付清单里还有几项没完成

> 第三幕（P14）用。**全课唯一一次翻车，也是最重要的八分钟。**

## 要查的是什么

**「我们那个产品，交付清单里还有几项没完成？」**

这是一个 CEO 真会问的问题。脚本去扫交付文档，找三种「还没完成」的凭据：

```
needs-human          卡在要人拍板的决策上
SIGNOFF ... false    还没签字
- [ ]                还没勾掉的事项
```

## 跑两次

```bash
node check-delivery.mjs ~/Desktop/star-mansions/doc
node check-delivery.mjs ~/Desktop/star-mansions/dco     # ← 路径故意写错，少一个字母
```

> 手上没有那个产品仓的，把路径换成 `sample-delivery`（本目录下有一份样例）：
> `node check-delivery.mjs sample-delivery` / `node check-delivery.mjs sample-deliverx`

**把第二次的输出原样念出来。先别解释。**

## 第二步（等课上讲到再跑）

```bash
node check-delivery-fixed.mjs ~/Desktop/star-mansions/dco
```

跟上面那个**只差一个地方**。

---

## 上课前自己跑一下，确认环境没问题

第一条应该报一个**非零**的数字，第二条应该报 **0**。
两条都跑得出来，你的环境就是好的。

> 跑不出来、或者第二条直接崩掉了 —— **上课时告诉讲师，不要自己改。**
