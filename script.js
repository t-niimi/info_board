function import_csv(csv_path)
{
    fetch(csv_path)
    .then((res) => {
        if(!res.ok) {
            console.log('正常にリクエストを処理できませんでした。');
        }
        return res.text();
    })
    .then((csv_data) => {
        convert_array(csv_data);
    })
    .catch((error) => {
        console.log('エラーが発生しました。');
    })
}

import_csv("./input.csv")

