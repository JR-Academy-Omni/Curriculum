# 混沌澳洲渠道上线 · Admin 配置清单

> Workstream B 的 prod 写入部分。代码侧（hundun-au 落地页 CTA、`?coupon=` 自动套用、归因捕获）已做好；下面 3 个对象要在 **admin 后台手动创建**（prod 写入，按边界由你/授权方点）。
> 依赖：课程已 SDM Sync 到 prod（拿到 `trainingId` / `programId`）。

## 落地页已接的真实链接（写死在 hundun-au/index.html）

```
https://jiangren.com.au/program-course/ai-solo-founder-bootcamp?utm_source=hundun-au&utm_medium=wechat&utm_campaign=opc-launch&coupon=HUNDUN-OPC
```

- `utm_source=hundun-au` → 全站 `AttributionTracker`（`app/[locale]/layout.tsx`）自动 `parseAttributionFromUrl` + `saveAttribution` + 记 `visit-utm`，报名成交归因到混沌渠道。**无需额外前端代码**。
- `coupon=HUNDUN-OPC` → `/apply` 结账步骤 `ApplyContentPayMethod` 新增的 effect 自动填券 + 校验（需后端先建好该 Coupon，否则显示"优惠券无效"，不影响报名）。

## 要在 admin 创建的 3 个对象

### 1. Coupon `HUNDUN-OPC`（会员专属折扣码）
| 字段 | 值 |
|---|---|
| code | `HUNDUN-OPC`（大写，与落地页链接一致）|
| type | `percentage` 或 `fixed_amount` —— **[商务确认]** |
| value | **[商务确认]**（如 10% 或 A$300）|
| scope | `[course]` |
| currency | `AUD` |
| validUntil | **[商务确认]**（建议对齐首期招生截止）|
| isRestricted | 视策略：公开发给混沌会员可设 false；要严格限领则配 CouponTask |
| metadata | `{ "channel": "hundun-au" }`（便于对账）|

### 2. TrackingLink（混沌专属归因链接）
| 字段 | 值 |
|---|---|
| name | 混沌澳洲专属 · AI 一人创业营 |
| promoterType | `affiliate` |
| promoterName | 混沌澳洲 |
| utmSource | `hundun-au` |
| utmMedium | `wechat` |
| utmCampaign | `opc-launch` |
| resourceType | `TRAINING`（或 `COURSE`）|
| resourceId | `<trainingId>` —— Sync 后从 prod 取 |
| targetPath | `/program-course/ai-solo-founder-bootcamp` |
| couponCode | `HUNDUN-OPC` |
| commissionRate | **[商务确认]**（0-1，如 0.15；不签独家）|
| expiresAt | **[商务确认]** |

> 注：落地页已直接用 UTM 编码链接，足够归因。TrackingLink 主要用于：admin 看渠道 stats（clickCount / registrationCount / purchaseCount）+ 算返佣。也可改用它生成的 shortCode 短链发给混沌。

### 3. LeadSource（线索来源，便于 EOI 归类 + 派单）
| 字段 | 值 |
|---|---|
| name | 混沌澳洲 |
| platform | `wechat` |
| sourceType | `cooperation` |

## 验证
1. 后端建好上述 3 个对象后，打开落地页链接 → `/apply` 应看到 `HUNDUN-OPC` 已自动套用、显示折扣。
2. admin 归因看板：该 TrackingLink 的 `registrationCount` / `purchaseCount` 随真实报名递增。
3. CustomerLead 上 `sourcePlatform` / `firstTrackingLinkId` 关联到混沌。

## 仍待商务/混沌确认（落地页占位）
- 折扣码具体值 + 有效期、返佣比例、预留席位数、混沌 logo 授权、联名 workshop 日期、会员规模数字。
