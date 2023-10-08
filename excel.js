;(table_rows =
    document.querySelectorAll('tbody tr')),
    (table_headings =
        document.querySelectorAll('thead th'))

// 3. Converting HTML table to PDF

const pdf_btn = document.querySelector('#to-pdf')
const manifestTable =
    document.getElementById('manifest')

const toPDF = function (customers_table) {
    const html_code = `
    <link rel="stylesheet" href="style-excel.css">
    <main class="table" >${customers_table.innerHTML}</main>
    `

    const new_window = window.open()
    new_window.document.write(html_code)

    setTimeout(() => {
        new_window.print()
        new_window.close()
    }, 400)
}

pdf_btn.onclick = () => {
    toPDF(manifestTable)
}

// 4. Converting HTML table to JSON

const json_btn =
    document.querySelector('#to-json')

const toJSON = function (table) {
    let table_data = [],
        t_head = [],
        t_headings = table.querySelectorAll('th'),
        t_rows =
            table.querySelectorAll('tbody tr')

    for (let t_heading of t_headings) {
        let actual_head = t_heading.textContent
            .trim()
            .split(' ')

        t_head.push(
            actual_head
                .splice(0, actual_head.length - 1)
                .join(' ')
                .toLowerCase()
        )
    }

    t_rows.forEach((row) => {
        const row_object = {},
            t_cells = row.querySelectorAll('td')

        t_cells.forEach((t_cell, cell_index) => {
            const img =
                t_cell.querySelector('img')
            if (img) {
                row_object['customer image'] =
                    decodeURIComponent(img.src)
            }
            row_object[t_head[cell_index]] =
                t_cell.textContent.trim()
        })
        table_data.push(row_object)
    })
    console.log(table)
    return JSON.stringify(table_data, null, 4)
}

json_btn.onclick = () => {
    const json = toJSON(manifestTable)
    downloadFile(json, 'json')
}

// 5. Converting HTML table to CSV File

const csv_btn = document.querySelector('#to-csv')

const toCSV = function (table) {
    // Code For SIMPLE TABLE
    // const t_rows = table.querySelectorAll('tr');
    // return [...t_rows].map(row => {
    //     const cells = row.querySelectorAll('th, td');
    //     return [...cells].map(cell => cell.textContent.trim()).join(',');
    // }).join('\n');

    const t_heads = table.querySelectorAll('th'),
        tbody_rows =
            table.querySelectorAll('tbody tr')

    const headings =
        [...t_heads]
            .map((head) => {
                let actual_head = head.textContent
                    .trim()
                    .split(' ')
                return actual_head
                    .splice(
                        0,
                        actual_head.length - 1
                    )
                    .join(' ')
                    .toLowerCase()
            })
            .join(',') +
        ',' +
        'image name'

    const table_data = [...tbody_rows]
        .map((row) => {
            const cells =
                    row.querySelectorAll('td'),
                img = decodeURIComponent(
                    row.querySelector('img').src
                ),
                data_without_img = [...cells]
                    .map((cell) =>
                        cell.textContent
                            .replace(/,/g, '.')
                            .trim()
                    )
                    .join(',')

            return data_without_img + ',' + img
        })
        .join('\n')

    return headings + '\n' + table_data
}

csv_btn.onclick = () => {
    const csv = toCSV(manifestTable)
    downloadFile(csv, 'csv', 'customer orders')
}

// 6. Converting HTML table to EXCEL File

const excel_btn = document.querySelector(
    '#table-to-excel'
)

const toExcel = function (table) {
    const t_heads = table.querySelectorAll('th'),
        tbody_rows =
            table.querySelectorAll('tbody tr')

    const headings =
        [...t_heads]
            .map((head) => {
                let actual_head = head.textContent
                    .trim()
                    .split(' ')
                return actual_head
                    .splice(
                        0,
                        actual_head.length - 1
                    )
                    .join(' ')
                    .toLowerCase()
            })
            .join('\t') + '\t'

    const table_data = [...tbody_rows]
        .map((row) => {
            const cells =
                    row.querySelectorAll('td'),
                data_without_img = [...cells]
                    .map((cell) =>
                        cell.textContent.trim()
                    )
                    .join('\t')

            return data_without_img + '\t'
        })
        .join('\n')

    return headings + '\n' + table_data
}

excel_btn.onclick = () => {
    const excel = toExcel(manifestTable)
    downloadFile(excel, 'excel', 'manifest')
}

const downloadFile = function (
    data,
    fileType,
    fileName = ''
) {
    const a = document.createElement('a')
    a.download = fileName
    const mime_types = {
        json: 'application/json',
        csv: 'text/csv',
        excel: 'application/vnd.ms-excel'
    }
    a.href = `
        data:${
            mime_types[fileType]
        };charset=utf-8,${encodeURIComponent(
            data
        )}
    `
    document.body.appendChild(a)
    a.click()
    a.remove()
}
