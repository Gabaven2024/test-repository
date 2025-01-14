// モンスターの初期体力
let monsterHealth = 100;

// ダメージ量（運動量に応じて変更可能）
const damagePerExercise = 10;

// HTMLの要素を取得
const healthBar = document.getElementById("health-bar");
const exerciseButton = document.getElementById("exercise-button");
const messageDisplay = document.getElementById("message");

// 運動ボタンをクリックしたときの処理
exerciseButton.addEventListener("click", () => {
    // モンスターにダメージを与える
    monsterHealth -= damagePerExercise;

    // ゲージを更新
    healthBar.value = monsterHealth;

    // モンスターが倒された場合
    if (monsterHealth <= 0) {
        messageDisplay.textContent = "モンスターを倒しました！おめでとうございます！";
        exerciseButton.disabled = true; // ボタンを無効化して運動を終了
        healthBar.value = 0; // ゲージをゼロにする
    } else {
        messageDisplay.textContent = `モンスターに${damagePerExercise}のダメージを与えました！残り体力：${monsterHealth}`;
    }
});
