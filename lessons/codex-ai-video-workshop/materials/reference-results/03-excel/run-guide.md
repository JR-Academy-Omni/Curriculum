# 重复使用 Excel 处理流程

完整 XLSX 参考成果为 october-sales-report.xlsx，可直接打开 Summary、Clean orders、Exceptions。

process_orders.py 是附带的确定性本地复用工具，不调用模型 API；只需要 Python 3 标准库。它接受本课程 Orders 模板（第一张工作表，固定七列，日期为文本），输出 CSV 明细、异常表、汇总、HTML 报告和 JSON 对账。不直接生成 XLSX，不支持任意表格布局或公式输入。需要 XLSX 时，要求 Codex 根据 CSV 生成并复核；或使用表格工具导入 CSV。

学生可以将下面这段英文复制给 Codex，无需自己输入命令：

> Run the provided process_orders.py on cases/03-excel/input/october-orders.xlsx. Check whether Python 3 is available first. Save outputs to a new folder named Codex October Orders in my system Downloads directory. If that name exists, use a numbered suffix. Open report.html and compare totals with the reference workbook. Do not edit the input file or install software without explaining what is needed. Do not call model APIs.

命令形式（在课程包根目录执行，目标目录必须尚不存在，替换为自己的系统下载目录）：

```text
python3 reference-results/03-excel/process_orders.py cases/03-excel/input/october-orders.xlsx --out /absolute/path/to/Downloads/Codex-October-Orders
```

如果输出目录已存在，脚本会停止，换新目录再执行。它始终重新读取输入，不叠加旧结果。

核对：14 原始行、9 接受行、1 重复行、4 隔离行。AUD 总额 1700；Paid 1330、Pending 490、Refunded -120；Brisbane 480、Sydney 500、Melbourne 720。

试改一条数据：在输入副本将 O001 数量从 2 改成 3，重新运行到另一个新目录；总额应为 1820，Paid 为 1450。已有 XLSX 参考表的 Clean orders 数量可编辑，Summary 会随公式更新；新增原始记录需要重新运行清洗流程，不能只把行粘到参考表末尾。
