<html>
<head>
    <title>Hasil Kelulusan</title>
</head>
<body>

    <h2>Hasil Penentuan Kelulusan</h2>
    <?php

        $nilai = $_POST['nilai'];

        echo "Nilai Anda = $nilai <br>";

        if ($nilai >= 55)
        {
            echo "Keterangan: LULUS";
        }
        else
        {
            echo "Keterangan: TIDAK LULUS";
        }
    ?>
</body>
</html>